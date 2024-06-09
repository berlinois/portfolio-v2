import { Route } from "@angular/router";

export const routes: Route[] = [
    {
        path: `home`,
        loadComponent: () => import(`../app/home/home.component`).then(mod => mod.HomeComponent)
    },
    {
        path: `experiences`,
        loadComponent: () => import(`../app/experiences/experience.component`).then(mod => mod.ExperiencesComponent)
    },
    {
        path: `skills`,
        loadComponent: () => import(`../app/skills/skills.component`).then(mod => mod.SkillsComponent)
    },
    {
        path: `passions`,
        loadComponent: () => import(`../app/passions/passions.component`).then(mod => mod.PassionsComponent)
    },
    {
        path: `contact`,
        loadComponent: () => import(`../app/contact/contact.component`).then(mod => mod.ContactComponent)
    },
    {
        path: `**`,
        redirectTo: `home`
    },
];

