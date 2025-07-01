import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { sendSuccessResponse, sendErrorResponse } from "../utils/responseHelpers";

const prisma = new PrismaClient();

// Get manager by cognitoId
export const getManager = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId } = req.params;

        const manager = await prisma.manager.findUnique({
            where: { cognitoId },
        });

        if (manager) {
            sendSuccessResponse(res, 200, manager);
        } else {
            console.error(`Manager with cognitoId ${cognitoId} not found`);
            sendErrorResponse(res, 404, "Manager not found");
        }
    } catch (error: any) {
        console.error(`Error getting manager: ${error.message}`);
        sendErrorResponse(res, 500, `Error getting manager: ${error.message}`);
    }
}

// Create a new manager
export const createManager = async (req: Request, res: Response): Promise<void> => {
    try {
        const { cognitoId, name, email, phoneNumber } = req.body;

        const manager = await prisma.manager.create({
            data: {
                cognitoId,
                name,
                email,
                phoneNumber,
            }
        });

        sendSuccessResponse(res, 201, manager);
    } catch (error: any) {
        console.error(`Error creating manager: ${error.message}`);
        sendErrorResponse(res, 500, `Error creating manager: ${error.message}`);
    }
}
