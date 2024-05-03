import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });
  test("displays an image of yourself with alt text", () => {
    // Arrange
    render(<App />);
    
    // Act
    const image = screen.getByAltText("Your Name");
  
    // Assert
    expect(image).toBeInTheDocument();
  });

  test("displays a second-level heading with the text 'About Me'", () => {
    // Arrange
    render(<App />);
    
    // Act
    const secondLevelHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
  });
  
  test("displays a biography paragraph", () => {
    // Arrange
    render(<App />);
    
    // Act
    const biographyParagraph = screen.getByText("Your biography goes here.");
  
    // Assert
    expect(biographyParagraph).toBeInTheDocument();
  });
  
  test("displays a link to GitHub", () => {
    // Arrange
    render(<App />);
    
    // Act
    const githubLink = screen.getByRole("link", { name: /github/i });
  
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
  });
  
  test("displays a link to LinkedIn", () => {
    // Arrange
    render(<App />);
    
    // Act
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
    // Assert
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
  });
  
