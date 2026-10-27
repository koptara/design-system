# Integration notes

This is the design-system subset present in the project, not the full original Smmify library. It contains Button, Alert, Banner, Tabs, Sheet, Toaster, color/semantic tokens and local assets. Application pages, business data, logos and photos are excluded.

Copy this folder into a React + TypeScript project. Configure the @design-system alias to point to this folder in both TypeScript and the bundler. Import shared.css once in the app entry. Banner/Toaster and Tabs import their own component styles.

Dependencies and the versions used in the source project are recorded in dependencies.json (reference only, not an installable package manifest).

Styling caveat: these are extracted source files, not a standalone app or compiled UI package. Components contain utility classes; generic Alert and Sheet need a compatible utility CSS setup and theme tokens, or equivalent CSS in the host app. The source application's mobile drawer styling is intentionally excluded. The source app also supplied button geometry and global resets; its generic button rules are included separately in host-button.css. Import that after shared.css to preserve the source app's 40px button sizing. Other sizes require host styling.

Typography is inherited from the host. The source project used Geist Variable.
