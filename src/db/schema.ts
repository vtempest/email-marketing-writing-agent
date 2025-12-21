import { pgTable, text, timestamp, boolean, integer, json } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// CRM Tables
export const company = pgTable("company", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  website: text("website"),
  domain: text("domain"),
  industry: text("industry"),
  size: text("size"),
  description: text("description"),
  logoUrl: text("logoUrl"),
  linkedinUrl: text("linkedinUrl"),
  twitterUrl: text("twitterUrl"),
  location: text("location"),
  country: text("country"),
  recentNews: json("recentNews").$type<string[]>(),
  enrichedData: json("enrichedData").$type<Record<string, any>>(),
  lastEnrichedAt: timestamp("lastEnrichedAt"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const contact = pgTable("contact", {
  id: text("id").primaryKey(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  title: text("title"),
  department: text("department"),
  linkedinUrl: text("linkedinUrl"),
  twitterUrl: text("twitterUrl"),
  status: text("status").notNull().default("active"), // active, inactive, unsubscribed
  tags: json("tags").$type<string[]>(),
  notes: text("notes"),
  lastContactedAt: timestamp("lastContactedAt"),
  companyId: text("companyId").references(() => company.id, { onDelete: "set null" }),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const campaign = pgTable("campaign", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  status: text("status").notNull().default("draft"), // draft, active, paused, completed
  emailSubject: text("emailSubject"),
  emailBody: text("emailBody"),
  emailTone: text("emailTone"),
  productInfo: text("productInfo"),
  targetCount: integer("targetCount").default(0),
  emailsSent: integer("emailsSent").default(0),
  emailsOpened: integer("emailsOpened").default(0),
  emailsClicked: integer("emailsClicked").default(0),
  emailsFailed: integer("emailsFailed").default(0),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  launchedAt: timestamp("launchedAt"),
});

export const campaignEmail = pgTable("campaignEmail", {
  id: text("id").primaryKey(),
  campaignId: text("campaignId")
    .notNull()
    .references(() => campaign.id, { onDelete: "cascade" }),
  contactId: text("contactId")
    .notNull()
    .references(() => contact.id, { onDelete: "cascade" }),
  subject: text("subject").notNull(),
  body: text("body").notNull(),
  status: text("status").notNull().default("pending"), // pending, sent, opened, clicked, failed, bounced
  sentAt: timestamp("sentAt"),
  openedAt: timestamp("openedAt"),
  clickedAt: timestamp("clickedAt"),
  failedReason: text("failedReason"),
  metadata: json("metadata").$type<Record<string, any>>(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});
