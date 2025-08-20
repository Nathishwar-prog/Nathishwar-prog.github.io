-- RLS Policies for profiles table
CREATE POLICY "Users can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (true);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = id);

-- RLS Policies for courses table
CREATE POLICY "Anyone can view published courses" 
ON public.courses 
FOR SELECT 
USING (is_published = true OR instructor_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Instructors and admins can insert courses" 
ON public.courses 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'instructor') OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Instructors can update their own courses" 
ON public.courses 
FOR UPDATE 
USING (instructor_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Instructors can delete their own courses" 
ON public.courses 
FOR DELETE 
USING (instructor_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- RLS Policies for course_enrollments table
CREATE POLICY "Users can view their own enrollments" 
ON public.course_enrollments 
FOR SELECT 
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Users can enroll themselves in courses" 
ON public.course_enrollments 
FOR INSERT 
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own enrollment progress" 
ON public.course_enrollments 
FOR UPDATE 
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- RLS Policies for projects table
CREATE POLICY "Users can view public projects and their own projects" 
ON public.projects 
FOR SELECT 
USING (
  is_public = true 
  OR owner_id = auth.uid() 
  OR EXISTS (
    SELECT 1 FROM public.project_collaborators 
    WHERE project_id = projects.id AND user_id = auth.uid()
  )
  OR public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Users can create their own projects" 
ON public.projects 
FOR INSERT 
WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Project owners can update their projects" 
ON public.projects 
FOR UPDATE 
USING (owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Project owners can delete their projects" 
ON public.projects 
FOR DELETE 
USING (owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- RLS Policies for project_collaborators table
CREATE POLICY "Users can view collaborators of projects they have access to" 
ON public.project_collaborators 
FOR SELECT 
USING (
  user_id = auth.uid() 
  OR EXISTS (
    SELECT 1 FROM public.projects 
    WHERE id = project_id AND (owner_id = auth.uid() OR is_public = true)
  )
  OR public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Project owners can add collaborators" 
ON public.project_collaborators 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.projects 
    WHERE id = project_id AND owner_id = auth.uid()
  )
  OR public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Project owners can update collaborator roles" 
ON public.project_collaborators 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.projects 
    WHERE id = project_id AND owner_id = auth.uid()
  )
  OR public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Project owners and collaborators can remove themselves" 
ON public.project_collaborators 
FOR DELETE 
USING (
  user_id = auth.uid() 
  OR EXISTS (
    SELECT 1 FROM public.projects 
    WHERE id = project_id AND owner_id = auth.uid()
  )
  OR public.has_role(auth.uid(), 'admin')
);

-- RLS Policies for certifications table
CREATE POLICY "Anyone can view active certifications" 
ON public.certifications 
FOR SELECT 
USING (is_active = true OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage certifications" 
ON public.certifications 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for user_certifications table
CREATE POLICY "Users can view their own certifications" 
ON public.user_certifications 
FOR SELECT 
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "System can award certifications to users" 
ON public.user_certifications 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'instructor'));

-- RLS Policies for resources table
CREATE POLICY "Anyone can view approved resources" 
ON public.resources 
FOR SELECT 
USING (is_approved = true OR added_by = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Authenticated users can add resources" 
ON public.resources 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL AND added_by = auth.uid());

CREATE POLICY "Users can update their own resources" 
ON public.resources 
FOR UPDATE 
USING (added_by = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins and resource owners can delete resources" 
ON public.resources 
FOR DELETE 
USING (added_by = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- RLS Policies for user_roles table
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage user roles" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update user roles" 
ON public.user_roles 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete user roles" 
ON public.user_roles 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'));

-- Fix function search paths
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;