import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { sendErrorResponse } from "../utils/responseHelpers";

interface DecodedToken extends JwtPayload {
    sub: string;
    "custom:role"?: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: string;
            };
        }
    }
}

export const authMiddleware = (allowedRules: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            console.error("No token found in request headers");
            sendErrorResponse(res, 401, "Unauthorized");
            return;
        }

        try {
            const decoded = jwt.decode(token) as DecodedToken;
            const userRole = decoded["custom:role"] ?? "";

            req.user = {
                id: decoded.sub,
                role: userRole,
            };

            const isAllowed = allowedRules.includes(userRole.toLowerCase());
            if (!isAllowed) {
                console.error("Unauthorized access");
                sendErrorResponse(res, 403, "Forbidden");
                return;
            }
        } catch (error) {
            console.error("Error verifying or decoding token:", error);
            sendErrorResponse(res, 401, "Unauthorized");
            return;
        }

        next();
    };
};
