/*
  Warnings:

  - Added the required column `oAuthConnectionId` to the `OAuthCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OAuthCode" ADD COLUMN     "oAuthConnectionId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "OAuthCode" ADD CONSTRAINT "OAuthCode_oAuthConnectionId_fkey" FOREIGN KEY ("oAuthConnectionId") REFERENCES "OAuthConnection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
