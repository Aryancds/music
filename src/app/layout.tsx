import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <link
        rel="icon"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAe1BMVEX///8AAAD8/Pz39/ft7e3h4eFSUlIFBQUKCgrz8/NHR0eurq44ODhCQkIUFBTU1NQ9PT22trYpKSkuLi5MTEzX19d2dnYbGxtdXV1paWmLi4u8vLw/Pz/GxsZsbGySkpIYGBikpKQiIiKbm5uFhYXCwsJYWFh/f391dXUCbJIQAAAFD0lEQVR4nO2diZbiOAxF7awsAYqwFEtBKkAB//+FUzXTcxpoJ7GcSHL66H6B3nlJbEuWopQgCIIgCIIgCIIgCIIgCIJAxzCOh9wxtCbejab6m+loF3PH0oJZoh9IZtzxOBKsU/1Eegu4Y3JhONF/MOnhyxK+/alD67eQOy4wG5MOrbfccUGZm3VoPeeODEaQVwnJ+/XCl1U6tC65Y4NQbUjPLKkxROsxd3QAagzResEdnT3jOh19smRRL6Q3ljQY0h9LGgzpjSWVi/pv+rG8Z81CMu4YbbAwpB+WWBjSC0v2Njq03nPH2YiVId8nLO44m7A0xH9LPmyFfHBHWs+XrQ6tv7hjrcWQOaliwh1rHQBDtD5wR1vDCCJkxB1tNQeIDp8tARnisSVAQ/y1ZAkVsuSO2MwMqkNrPwsNSXPgryTcMZtwMMRPSxwM8dISJ0M8tCQA7LIemXiWCY6cHqwfkog79l+Eq/Fu+5E2R1xF+rHdzVeMxgTxvDiOTi0kPMk5jY7FPKbVE++L+zLvSMGLnnx5P+/R7xbEX+d1kg8wFDwzWCTr8xeCnuhQ3q4LAgWveq638tDV1yAsk3dqBc+8J2X78nx4IffBxPTSUsrsxC3hf/JWe4C5F3b8x6BF4nuP8ol1ZeCcnIyn3LE/M3X9HgNzCfg4ZiusKja0uL0mxgtXvDgVI1bcUZtYOQi5cAdtYucgxLtX/QeX1515g2XmBNcRcMdsJIWfvELumM3AhfjpiIMQ9ckds4l3uA77+iwlLoVHL9eRi4MQxxwoLk6nK8ckKCZuJW1QrZkGx1rdljvuV1w7BELLmz5UZM6ZlKj2IjI1eYtMnU9K2uj4VtJ49ZWKRcvMqS9KstYZ4MiLNz7roMts6IGSt0665Ybs28euuv5C5s3KqLOev5A1EbHssHcxBF/86Y6k0wJp4FxHb8u140JvcOXRsem8YB1U9Kz2TQePEqTOXvLzyRFHh1JHWh1rLB1K3Sl13PB0KLWm0+GS+QFwo9LhUgkBQZS3K7B1KLWj0HHG16FU8ZfoUOqMLCMlG0KArIRwmALqrv5Kp0OVmEIom8TBnSIQKLtKGlvv20DpCOr6jrw3eQL1uEj5sqPmtnM6HSHqFcGUbnQVcp2UrqekxBVCt7IjH68Qj7gvIOcd6doTka9nO1zKcmOIq0NrqtmBqDutH6h2W9gHK6oDIn6e7k4kBL2ARdXojn637pNGR4StQ2uaJkuC6080M1MI8loEeUZFUiahGd1K0I5BM+uJoGFpSqEjxtehNcUkcJKOJYoZdSRlBfQyj6qcEd0tGwIhJNe3CKYGBiRdrwN8IUTNcPifLdT89W/wM9lEVV38TLZD/vrkkHXBz2RD7wGn2+/HPd5Cs8X4I4GBO63Nr7c2Bi4/+LstUDiPvxyZgfKTKboQwDIyeclPHQAXiPEXEuvO18ww2WBvvS3AT5taPiB5xUIwtix24U8Qs9r8nsrKS5XB2epjjL/9tThXfRa1xbOwsEiMEZysmp4ti6Eyw0vTR5yiRFJfQBysrZJr0br+60dSRqy5oZkerXOEtYs9TfGtuqtvA3qyqxf7jGjwWUUvHPzPYTNz60DbvjB7IsMSPXIqMx1Mf+0inBMY3F4ecNMybsfrYk/9H7XV5kFK1uo8N36Qkm5cRri0Iy6WP/uuQbZuXbs83P+db/e+LLj+NRhGnVWSo6h/v4ETBEEQBEEQBEEQBEEQBEHwlH8A0TpVTket+rIAAAAASUVORK5CYII="
      />
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}

