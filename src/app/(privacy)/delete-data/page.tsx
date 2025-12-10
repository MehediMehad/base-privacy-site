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
    // Reset form after showing message
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
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Delete My Data</h1>
          <p className="text-muted-foreground text-balance">
            You can request deletion of your personal data while keeping your
            account active. This will remove your stored information,
            preferences, and activity history. Your account will remain
            functional but with default settings.
          </p>
        </div>

        {showMessage && (
          <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              Your data deletion request has been submitted successfully. We
              will process your request within 30 days.
            </AlertDescription>
          </Alert>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Data Deletion Request
            </CardTitle>
            <CardDescription>
              Remove your personal data while keeping your account active.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
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
                  placeholder="Any specific data you want to mention..."
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
                {showMessage ? "Request Submitted" : "Delete My Data"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
