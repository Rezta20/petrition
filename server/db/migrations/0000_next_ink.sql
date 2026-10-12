CREATE TABLE "pets" (
	"id" serial PRIMARY KEY NOT NULL,
	"species" text NOT NULL,
	"name" text NOT NULL,
	"weight_kg" real NOT NULL,
	"age_months" integer NOT NULL,
	"neutered" boolean NOT NULL,
	"activity" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
