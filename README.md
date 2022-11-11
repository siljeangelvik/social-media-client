# Social Media Client

**Forked:** [NoroffFEU Project](https://github.com/NoroffFEU/social-media-client)  
**GitHub:** [Repo](https://github.com/siljeangelvik/social-media-client-angelvik/tree/workflow)  
**Course Assignment:** [Workflow](https://noroff-content.gitlab.io/feu/workflow/ca.html)

![Deploy to pages](https://github.com/siljeangelvik/social-media-client-angelvik/actions/workflows/pages.yml/badge.svg)

---

## Self Notes: Errors

### 1. Error

Feedback when running commands:  
**npm run dev**  
**npm run build-vite**

![build-vite.png](./issues/img/build-vite.png)

### 2. Success ?

removed **"type": "module"** from package.json.  
successful command: **'npm run build-vite'**

![remove-module-from-packageJSON.png](./issues/img/remove-module-from-packageJSON.png)

feedback message:

<script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"> in "/index.html" can't be bundled without type="module" attribute

---

## Notes:

- eslint is auto-activated in my editor, turn it off?
- eslint is configured manually
- Code Editor Setting: Tools / Languages & Framework / Actions on Save

## Issues:

(Test these)

- Login form modal closes on invalid input
- missing . in href

---

## Resources:

- [Workflow Status Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)
- [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)
- [Prettier Pre-Commit Hook](https://prettier.io/docs/en/precommit.html)
- [npm commands](https://docs.npmjs.com/cli/v7/commands)
- [ESLint JavaScript](https://eslint.org/docs/latest/developer-guide/working-with-rules)
- [Simple SASS Compiler Setup](https://sprucecss.com/blog/the-simplest-sass-compile-setup)
- [Vite Docs Guide](https://vitejs.dev/guide/)
- [Git Docs WebHook](https://docs.github.com/en/get-started/customizing-your-github-workflow/exploring-integrations/about-webhooks)

### Tools

**Bundler:** Vite
**Formatter:** Prettier  
**Linting:** ESLint  
**Unit Tester:** Jest / Cypress  
**E2E Tester:** Cypress
