/*
  Warnings:

  - You are about to drop the column `state` on the `OAuthCode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OAuthCode" DROP COLUMN "state";
