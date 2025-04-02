import { defineType } from "sanity";

export const userSchema = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "userName",
      title: "User Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "User Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "role",
      title: "User Role",
      type: "string",
      options: {
        list: ["admin", "moderator", "writer", "pending"],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
