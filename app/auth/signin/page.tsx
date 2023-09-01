"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Please provide a valid email.",
    })
    .refine(
      (val) =>
        val.includes("@my.whitworth.edu") || val.includes("@whitworth.edu"),
      {
        message: "Please provide a valid Whitworth University email.",
      }
    ),
  passcode: z.string().min(6, {
    message: "Passcode must be at least 6 characters.",
  }),
});

export default function SigninPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      passcode: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("https://whitworth.ainsoft.org/api/quizpacks/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data[0].passcode;
      });
    if (values.passcode == res) {
      toast({
        title: "Let's get started!",
      });
      console.log({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
      });

      signIn("credentials", {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
      });
    } else {
      toast({
        title: "Passcode is incorrect",
        description: "Make sure yuou are using proctor provided passcode",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-80 space-y-4">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              {/* <FormDescription>Please Provide your username</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Last name" type="text" {...field} />
              </FormControl>
              {/* <FormDescription>Please Provide your password</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (Whitworth Email)</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              {/* <FormDescription>Please Provide your password</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passcode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passcode (provided by proctor)</FormLabel>
              <FormControl>
                <Input placeholder="Passcode" type="password" {...field} />
              </FormControl>
              {/* <FormDescription>Please Provide your password</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={cn("w-full")}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
