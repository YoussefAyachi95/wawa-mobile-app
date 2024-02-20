-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" BYTEA,
ADD COLUMN     "deliveryAddress" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL;
