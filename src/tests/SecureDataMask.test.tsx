import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import SecureDataMask from "../components/SecureDataMask";

describe("SecureDataMask", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it("reveals the value and masks it again after 10 seconds", () => {
    render(<SecureDataMask value="123456789012" />);

    expect(screen.getByText("XXXX-XXXX-9012")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: /reveal/i,
      })
    );

    expect(screen.getByText("123456789012")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(screen.getByText("XXXX-XXXX-9012")).toBeInTheDocument();
  });
});