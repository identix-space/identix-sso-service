/*
  Warnings:

  - A unique constraint covering the columns `[did]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `did` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "did" TEXT;

-- UpdateAccounts
UPDATE "Account" SET "did" = concat('did:fake:', id)
WHERE "did" IS NULL;

-- AlterColumn
ALTER TABLE "Account" ALTER COLUMN "did" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Account_did_key" ON "Account"("did");
