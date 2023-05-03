/*
  Warnings:

  - You are about to drop the column `avatar` on the `OAuthConnection` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `OAuthConnection` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `OAuthConnection` table. All the data in the column will be lost.
  - Added the required column `otherData` to the `OAuthConnection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OAuthConnection" DROP COLUMN "avatar",
DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "otherData" JSONB NOT NULL;
