import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import {screen, render} from "@testing-library/react";
import "@testing-library/jest-dom";


it("Should render the restaurant card info", () => {

    render(<RestaurantCard  resData = {MOCK_DATA}/>);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
    
})