import { render, screen } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";

jest.mock("next/router", () => ({
    __esModule: true,
    useRouter() {
        return {
            route: "/produk",
            pathname: "",
            query: {},
            asPath: "/produk",
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            isReady: true,
        }
    },
}))

jest.mock("swr", () => ({
    __esModule: true,
    default: () => ({
        data: { data: [] },
        error: null,
        isLoading: false
    })
}))

const TampilanProduk = require("../../pages/produk").default;

describe("Product Page", () => {
    it("renders product page correctly", () => {
        const page = render(<TampilanProduk />);
        // expect(screen.getByTestId("title").textContent).toContain("Product Page");
        expect(page).toMatchSnapshot();
    })
})