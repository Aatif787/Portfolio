import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";

const ProfessionalAssetsResumeHub = lazy(() => import('./pages/professional-assets-resume-hub'));
const AboutProfessionalJourney = lazy(() => import('./pages/about-professional-journey'));
const InsightsProfessionalBlog = lazy(() => import('./pages/insights-professional-blog'));
const ProjectCaseStudiesPortfolio = lazy(() => import('./pages/project-case-studies-portfolio'));
const Homepage = lazy(() => import('./pages/homepage-data-storyteller-portfolio'));
const SkillsInteractiveCapabilities = lazy(() => import('./pages/skills-interactive-capabilities'));

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-primary">Loading...</div>}>
          <RouterRoutes>
            <Route path="/" element={<AboutProfessionalJourney />} />
            <Route path="/professional-assets-resume-hub" element={<ProfessionalAssetsResumeHub />} />
            <Route path="/about-professional-journey" element={<AboutProfessionalJourney />} />
            <Route path="/insights-professional-blog" element={<InsightsProfessionalBlog />} />
            <Route path="/project-case-studies-portfolio" element={<ProjectCaseStudiesPortfolio />} />
            <Route path="/homepage-data-storyteller-portfolio" element={<Homepage />} />
            <Route path="/skills-interactive-capabilities" element={<SkillsInteractiveCapabilities />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
