import { NextResponse } from "next/server";

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: number;
}

export async function GET() {
  const apiKey = "AIzaSyAC5wOONwRMONWrXz3Ggbbq3wWqnMd81GA";
  const placeId = "ChIJD0epOlW1vJURqEMTojoh0IA";

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=es&key=${apiKey}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Error en respuesta de Google:", response.status);
      return NextResponse.json(
        { error: "Error en la solicitud a Google API" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Data de Google:", data);

    const reviews: GoogleReview[] = data.result?.reviews || [];

    if (reviews.length === 0) {
      console.log("No se encontraron reseñas");
      return NextResponse.json([]);
    }

    const filteredReviews = reviews
      .filter((review) => review.rating >= 4)
      .sort((a, b) => {
        if (b.rating === a.rating) {
          return b.time - a.time;
        }
        return b.rating - a.rating;
      })
      .slice(0, 4);

    console.log("Reseñas filtradas:", filteredReviews.length);

    return NextResponse.json(filteredReviews);
  } catch (error) {
    console.error("Error completo:", error);
    return NextResponse.json(
      { error: "Error obteniendo reseñas", details: String(error) },
      { status: 500 }
    );
  }
}
