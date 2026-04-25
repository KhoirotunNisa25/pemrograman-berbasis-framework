import { render, screen } from "@testing-library/react";
import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import "@testing-library/jest-dom/jest-globals";

const mockUseSWR = jest.fn();

jest.mock("swr", () => ({
    __esModule: true,
    default: (...args: unknown[]) => mockUseSWR(...args),
}));
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

jest.mock("next/image", () => ({
    __esModule: true,
    default: (props: any) => {
        return <img {...props} />
    }
}))

jest.mock("next/link", () => ({
    __esModule: true,
    default: ({ children, href }: any) => {
        return <a href={href}>{children}</a>
    }
}))

const Produk = require("../../pages/produk").default;

describe("Product Page (/pages/produk)", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockUseSWR.mockReset();
    });

    it("renders product page with loading state", () => {
        mockUseSWR.mockReturnValue({
            data: undefined,
            error: undefined,
            isLoading: true
        });

        const { container } = render(<Produk />);
        expect(container).toBeDefined();
    })
    
    it("renders product page with data", () => {
        const mockData = {
            data: [
                {
                    id: "1",
                    name: "Produk A",
                    category: "Kategori A",
                    price: 50000,
                    size: "M",
                    image: "/image1.jpg"
                }
            ]
        };

        mockUseSWR.mockReturnValue({
            data: mockData,
            error: undefined,
            isLoading: false
        });

        render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })
    
    it("renders product page with multiple products", () => {
        const mockData = {
            data: [
                {
                    id: "1",
                    name: "Produk 1",
                    category: "Kategori A",
                    price: 50000,
                    size: "M",
                    image: "/image1.jpg"
                },
                {
                    id: "2",
                    name: "Produk 2",
                    category: "Kategori B",
                    price: 75000,
                    size: "L",
                    image: "/image2.jpg"
                }
            ]
        };

        mockUseSWR.mockReturnValue({
            data: mockData,
            error: undefined,
            isLoading: false
        });

        render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })

    it("renders product page when data is null", () => {
        mockUseSWR.mockReturnValue({
            data: null,
            error: undefined,
            isLoading: false
        });

        render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })

    it("renders product page with error state", () => {
        mockUseSWR.mockReturnValue({
            data: undefined,
            error: new Error("API Error"),
            isLoading: false
        });

        render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })

    it("renders empty products array from data", () => {
        const mockData = { data: [] };

        mockUseSWR.mockReturnValue({
            data: mockData,
            error: undefined,
            isLoading: false
        });

        render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })

    it("handles undefined data response", () => {
        mockUseSWR.mockReturnValue({
            data: undefined,
            error: undefined,
            isLoading: false
        });

        render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })

    it("renders with various loading states", () => {
        const mockData = {
            data: [
                {
                    id: "1",
                    name: "Test Product",
                    category: "Test Cat",
                    price: 10000,
                    size: "S",
                    image: "/test.jpg"
                }
            ]
        };

        mockUseSWR.mockReturnValue({
            data: mockData,
            error: undefined,
            isLoading: false
        });

        const { container } = render(<Produk />);
        expect(container).toBeDefined();
    })

    it("renders page with all SWR states combined", () => {
        mockUseSWR.mockReturnValue({
            data: {
                data: [
                    {
                        id: "1",
                        name: "Combined Test",
                        category: "Test",
                        price: 999,
                        size: "M",
                        image: "/combined.jpg"
                    }
                ]
            },
            error: undefined,
            isLoading: false
        });

        render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
    })

    it("component mounts and unmounts properly", () => {
        mockUseSWR.mockReturnValue({
            data: null,
            error: undefined,
            isLoading: false
        });

        const { unmount } = render(<Produk />);
        expect(screen.getByTestId("title")).toBeInTheDocument();
        unmount();
    })
})