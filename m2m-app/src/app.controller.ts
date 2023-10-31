import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get-users')
  getUsers(req, res) {
    return this.appService.getUsers(req, res);
  }
}

/**
 * const Auth0 = require("auth0");
 *
 * const express = require("express");
 * const cors = require("cors");
 * const { auth } = require("express-oauth2-jwt-bearer");
 *
 * const auth0 = new Auth0.ManagementClient({
 *   domain: "development-playground.us.auth0.com",
 *   clientId: "2uI3Ur6XLvqDeZmx2HLPe46fQ3gWungq",
 *   clientSecret: "Dz0hXmr62jvsZbeVGxi77o70kLne8NAlgZ1cUuEc95M0MqZyOcwV5YTXxclBVeL4"
 * });
 *
 * const app = express();
 *
 * const port = process.env.PORT || 8080;
 *
 * app.use(cors());
 *
 * const jwtCheck = auth({
 *   audience: "https://people-service-epsilon.com",
 *   issuerBaseURL: "https://development-playground.us.auth0.com/",
 *   tokenSigningAlg: "RS256"
 * });
 *
 * // Define a middleware that applies jwtCheck for specific routes
 * const requireAuth = (req, res, next) => {
 *   // You can conditionally apply jwtCheck based on route or other conditions here
 *   // For example, you can apply it to all routes except '/public'
 *   if (req.path !== "/") {
 *     jwtCheck(req, res, next);
 *   } else {
 *     next();
 *   }
 * };
 *
 * // enforce on all endpoints
 * app.use(requireAuth);
 *
 * app.get("", function(req, res) {
 *   res.json({ message: "Public Resource - Public Access" });
 * });
 *
 * app.get("/authorized", function(req, res) {
 *   res.json({ message: "Secured Resource - Authorized Access" });
 * });
 *
 * app.get("/add-role", async function(req, res) {
 *   if (req.auth.payload.permissions.includes("update:roles")) {
 *     const roleId = "rol_n3aWDhpbtVoCvPXf";
 *     const userId = "auth0|653bda2e9b73f78151a79469";
 *     const users = [userId];
 *     // await auth0.roles.assignUsers({ id: roleId }, { users });
 *     try {
 *       await auth0.organizations.addMemberRoles({
 *         id: "org_4cnDTb2RkpcIytdV",
 *         user_id: userId
 *       }, { roles: [roleId] });
 *       res.json({ message: "Added role to user" });
 *
 *     } catch (error) {
 *       if (!!error.msg) {
 *
 *         if (error.msg === "User is not a member of this organization") {
 *           res.json({ message: "Error: user is not a member of this" +
 *               " organization" });
 *         }
 *       } else res.json({ message: "error adding role to user" });
 *     }
 *   } else {
 *     res.json({ message: "not authorized to add role to user" });
 *   }
 * });
 *
 * app.get("/get-users", async function(req, res) {
 *   if (req.auth.payload.permissions.includes("update:roles")) {
 *     const roleId = "rol_n3aWDhpbtVoCvPXf";
 *     const userId = "auth0|653bda2e9b73f78151a79469";
 *     const users = [userId];
 *     const result = await auth0.users.getAll();
 *     res.json({ message: result });
 *   } else {
 *     res.json({ message: "not authorized to add role to user" });
 *   }
 * });
 *
 * app.listen(port);
 *
 * // eslint-disable-next-line no-console
 * console.log("Running on port ", port);
 */
