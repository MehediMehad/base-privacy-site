"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Database, CheckCircle } from "lucide-react";
import { APP_NAME, APP_SUPPORT_EMAIL } from "@/lib/information";

export default function DeleteDataPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    note: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);

    // Reset after message
    setTimeout(() => {
      setFormData({ email: "", password: "", note: "" });
      setShowMessage(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Google Play REQUIRED INFO */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            {APP_NAME} – Account Deletion Request
          </h1>
          <p className="text-muted-foreground text-balance">
            This page allows {APP_NAME} users to permanently delete their
            account and associated data. This service is provided by {APP_NAME}.
          </p>
          <p className="text-sm text-muted-foreground">
            If you need support, contact: {APP_SUPPORT_EMAIL}
          </p>
        </div>

        {showMessage && (
          <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Your account deletion request has been submitted successfully.
              Your {APP_NAME} account and all associated data will be deleted
              within 30 days.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Request to Delete Account
            </CardTitle>
            <CardDescription>
              Submit this form to permanently delete your {APP_NAME} account.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Registered Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={`Your ${APP_NAME} account email`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Account Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Your account password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">Additional Notes (Optional)</Label>
                <Textarea
                  id="note"
                  name="note"
                  placeholder="If you want to mention something specific..."
                  value={formData.note}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#04391E] hover:bg-[#04391E]"
                disabled={showMessage}
              >
                {showMessage ? "Request Submitted" : "Delete My Account"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground">
          {APP_NAME} © {new Date().getFullYear()} – All Rights Reserved
        </p>
      </div>
    </div>
  );
}
