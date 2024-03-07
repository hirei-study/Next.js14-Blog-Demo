"use client";

import { createArticle } from "@/blogAPI";
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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  id: z.string().min(2, { message: "最低でも2文字以上入力してください" }),
  title: z.string().min(3, { message: "タイトルは3文字以上必要です" }),
  content: z
    .string()
    .min(10, { message: "投稿内容は最低でも10文字以上必要です" })
    .max(200, { message: "投稿内容は200文字以内に収めてください" }),
});

const CreateBlogPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    setLoading(true);

    const { id, title, content } = value;
    // console.log(id, title, content);

    // await createArticle(id, title, content);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    await fetch(`${API_URL}/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    });

    setLoading(false);

    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen py-4 px-2 md:px-4">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>

      <div className="p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 bg-slate-200 p-4 rounded mb-2"
          >
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-bold mb-2">
                    URL
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="URL"
                      {...field}
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-bold mb-2">
                    タイトル
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="タイトル"
                      {...field}
                      className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 text-sm font-bold mb-2">
                    本文
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="投稿内容"
                      className="resize-none shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className="p-2 animate-spin h-6 w-6 border-4 border-blue-500 rounded-full border-t-transparent cursor-not-allowed"></div>
              ) : (
                <p className="hover:bg-opacity-85">投稿</p>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
