import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assest/logo.png";
import background from "../assest/background.jpg";

export const HomePage: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Hardcoding Credentials
    // const username = "admin"; // Hardcoded username
    // const password = "P@ssw0rd123"; // Hardcoded password
    // console.log(`User details: ${username} ${password}`)

    // Unused Variables
    // const unusedVariable = 42;

    // Inconsistent Naming
    const userName = "John"; // camelCase
    const userEmail = "john@example.com"; // Changed to camelCase
    console.log(userName, userEmail);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    //#region Duplicated Code

    // Commented out duplicated functions
    // const handleLogout1 = () => {
    //     logout();
    //     navigate("/");
    // };

    // const handleLogout2 = () => {
    //     logout();
    //     navigate("/");
    // };

    // const handleLogout3 = () => {
    //     logout();
    //     navigate("/");
    // };

    // const handleLogout4 = () => {
    //     logout();
    //     navigate("/");
    // };

    // Use duplicated functions
    // handleLogout1();
    // handleLogout2();
    // handleLogout3();
    // handleLogout4();

    //#endregion

    // Magic Numbers
    function calculateArea(radius: number): number {
        const pi = 3.14159; // Defined constant for Pi
        return pi * radius * radius;

        // Unreachable Code
        // function processData(): void {
        //     return;
        //     console.log("This line is never reached");
        // }
    }
    console.log(calculateArea(5)); 

    // Long Parameter List
    function configure(
        host: string,
        port: number,
        username: string,
        password: string,
        useSsl: boolean,
        timeout: number,
        // timeout2: number,
        // timeout3: number,
        // timeout4: number,
        // timeout5: number,
        // timeout6: number,
        protocol: string,
    ): void {
        // Configuration logic
        console.log(host, port, username, password, useSsl, timeout, protocol);
    }
    configure("localhost", 8080, "user", "pass", true, 1000, "http");

    // Overuse Comments
    function add(a: number, b: number): number {
        // This function adds two numbers
        return a + b;
    }
    console.log(add(1, 2));

    // Excessive Nesting
    function processData1(): void {
        function stepOne() {
            function stepOneA() {
                function stepOneA1() {
                    console.log("Deeply nested function");
                    // Removed excessive nesting
                    // function stepOneA2() {
                    //     console.log("Deeply nested function");
                    //     function stepOneA3() {
                    //         console.log("Deeply nested function");
                    //         function stepOneA4() {
                    //             console.log("Deeply nested function");
                    //             function stepOneA5() {
                    //                 console.log("Deeply nested function");
                    //             }
                    //             stepOneA5();
                    //         }
                    //         stepOneA4();
                    //     }
                    //     stepOneA3();
                    // }
                    // stepOneA2();
                }
                stepOneA1();
            }
            stepOneA();
        }
        stepOne();
    }
    processData1(); 

    // Lazy Class
    class Address {
        street: string;
        constructor(street: string) {
            this.street = street;
        }
    }
    const address = new Address("123 Main St");
    console.log(address);

    // Commented-Out Code
    // function calculateAreaa(radius: number): number {
    //   return 3.14159 * radius * radius; // Magic number for Pi
    // }

    // Unused Methods
    class Example {
        // unusedMethod(): void {
        //     console.log("This method is never called");

        //     // Unnecessary Method Calls
        //     redundantMethod();
        // }
    }

    function redundantMethod(): void {
        // No operation
    }

    // Redundant Type Casting
    function displayNumber(): void {
        const number = 42;
        console.log(number); // Removed redundant type casting
    }
    displayNumber();

    // Redundant Initialization
    function initializeValue(): void {
        let value = 10; // Removed redundant initialization
        console.log(value);
    }
    initializeValue();

    // Unnecessary Null Checks
    function printMessage(message: string): void {
        // Removed unnecessary null check
        console.log(message);
    }
    printMessage("Hello, world!");

    // Uncommunicative Name
    function calculate(): void {
        const firstNumber = 10; // Improved variable name
        const secondNumber = 20; // Improved variable name
        const sum = firstNumber + secondNumber; // Improved variable name
        console.log(sum);
    }
    calculate();

    //#region Long Method
    function processData(data: number[]): void {
        console.log("Starting process...");
        data.forEach((item) => {
            console.log(`Processing item: ${item}`);
            // Removed excessive repetition
            // Simulate complex logic
            for (let i = 0; i < 100; i++) {
                console.log(`Step ${i} for item ${item}`);
            }
        });
        console.log("Process completed.");
    }
    processData([1, 2, 3]); 
    //#endregion

    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Top Panel */}
            <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm">
                <img src={logo} alt="Company Logo" className="h-12" />
                <div className="flex items-center space-x-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User Avatar"
                        className="h-10 w-10 rounded-full"
                    />
                    <span className="text-lg font-medium">{user?.username}</span>
                    <button
                        onClick={handleLogout}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Central Space */}
            <div className="flex-grow flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="relative z-10 bg-white/80 p-8 rounded-lg backdrop-blur-sm">
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome, {user?.username}!
                    </h1>
                    <p className="mb-6">You have successfully logged in.</p>
                    <button
                        onClick={handleLogout}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Bottom Panel */}
            <div className="p-4 bg-white/80 backdrop-blur-sm text-center">
                <span className="text-sm text-gray-600">Version 1.0.0</span>
            </div>
        </div>
    );
};