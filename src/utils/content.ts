interface IContent {
  title: string;
  text: string;
}

export const content: Record<string, IContent> = {
  sedans: {
    title: "sedans",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  suvs: {
    title: "suvs",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  luxury: {
    title: "luxury",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. ",
  },
};
