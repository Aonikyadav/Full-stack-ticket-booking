import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
  try {
    const { userId } = req.auth(); // corrected = to :

    const user = await clerkClient.users.getUser(userId);

    if (user.privateMetadata.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: "Not authorized: Admins only"
      });
    }

    next();
  } catch (error) {
    console.error("protectAdmin error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Not authorized"
    });
  }
};
