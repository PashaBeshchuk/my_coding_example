import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "routes";

import Organization from "./Organization";

export const OrganizationRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.ORGANIZATION} component={Organization} />
  </Switch>
);
