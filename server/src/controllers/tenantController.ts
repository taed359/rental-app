import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responseHelpers"; // Import success and error helpers

const prisma = new PrismaClient();

// Get tenant by cognitoId
export const getTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params;

        const tenant = await prisma.tenant.findUnique({
            where: { cognitoId },
            include: { favorites: true },
        });

        if (tenant) {
            sendSuccessResponse(res, 200, tenant);
        } else {
            console.error(`Tenant with cognitoId ${cognitoId} not found`);
            sendErrorResponse(res, 404, "Error getting tenant");
        }
    } catch (error: any) {
        console.error(`Error getting tenant: ${error.message}`);
        sendErrorResponse(res, error, "Error getting tenant");
    }
}

// Create a new tenant
export const createTenant = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId, name, email, phoneNumber } = req.body;

        const tenant = await prisma.tenant.create({
            data: {
                cognitoId,
                name,
                email,
                phoneNumber,
            },
        });

        sendSuccessResponse(res, 201, tenant);
    } catch (error: any) {
        console.error(`Error creating tenant: ${error.message}`);
        sendErrorResponse(res, error, "Error creating tenant");
    }
}
