-- CreateEnum
CREATE TYPE "OAuthProvider" AS ENUM ('AUTH0');

-- CreateTable
CREATE TABLE "OAuthConnection" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER NOT NULL,
    "provider" "OAuthProvider" NOT NULL,
    "uid" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "avatar" TEXT,

    CONSTRAINT "OAuthConnection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OAuthConnection_provider_accountId_key" ON "OAuthConnection"("provider", "accountId");

-- AddForeignKey
ALTER TABLE "OAuthConnection" ADD CONSTRAINT "OAuthConnection_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
