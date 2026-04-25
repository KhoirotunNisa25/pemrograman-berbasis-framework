import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/about';
import { describe, it, expect } from '@jest/globals';
import About from "@/pages/about";

describe("Halaman About", () => {
    it("renders about page correctly", () => {
        const page = render(<AboutPage />);
        // expect(screen.getByTestId("title").textContent).toBe("Halaman About");
        expect(page).toMatchSnapshot();
    })
})