import { Response } from "express";

// Success response helper
export const sendSuccessResponse = (res: Response, statusCode: number, data: any) => {
    res.status(statusCode).json(data);
};

// Error response helper
export const sendErrorResponse = (res: Response, statusCode: number, message: string) => {
    res.status(statusCode).json({ message });
};
