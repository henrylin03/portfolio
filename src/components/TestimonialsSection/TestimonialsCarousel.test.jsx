import { describe, expect, it } from "vitest";
import { render, screen } from "../../../test-utils";
import testimonials from "../../data/testimonials";
import TestimonialsCarousel from "./TestimonialsCarousel";

describe("TestimonialsCarousel", () => {
  it("renders carousel with correct number of testimonials", () => {
    render(<TestimonialsCarousel />);
    const slides = screen.getAllByRole("group");
    expect(slides).toHaveLength(testimonials.length);
  });

  it("displays testimonial content correctly", () => {
    render(<TestimonialsCarousel />);

    // test using the first 2 testimonials
    for (let i = 0; i < 2; i++) {
      const testimonial = testimonials[i];

      expect(screen.getByText(`"${testimonial.fullText}"`)).toBeInTheDocument();
      expect(screen.getByText(testimonial.author.name)).toBeInTheDocument();
      expect(
        screen.getByText(
          `${testimonial.author.title}, ${testimonial.clientName}`,
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByAltText(`Photo of ${testimonial.author.name}`),
      ).toBeInTheDocument();
    }
  });
});
