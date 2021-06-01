import React from "react";

const SignUp = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center flex-col">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSIjZjNmNGY2IiBzaGFwZT0ic3F1YXJlIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk5OTk5NzEzODk3Nyw3Ni44MDAwMDAwMDAwMDAwMSkiPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTguNzg3IDUwMy4yMTNjMTEuNzE2IDExLjcxNiAzMC43MTEgMTEuNzE2IDQyLjQyNiAwbDQyLjg1NS00Mi44NTVjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzbC0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTQyLjg1NSA0Mi44NTVjLTExLjcxNiAxMS43MTYtMTEuNzE2IDMwLjcxIDAgNDIuNDI2eiIgZmlsbD0iI2JlZWJmYSIgZGF0YS1vcmlnaW5hbD0iI2JlZWJmYSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im05NC4wNjggNDYwLjM1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzQuNjc0IDc0LjY3NWMxMS43MTYgMTEuNzE2IDMwLjcxMSAxMS43MTYgNDIuNDI2IDB6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTEyNC41MjUgMzE4LjA3MWgxMDguODA4djMwaC0xMDguODA4eiIgZmlsbD0iIzllZTJmOCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTE4My4xMSAyMjQuMDc2KSIgZGF0YS1vcmlnaW5hbD0iIzllZTJmOCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMjkuODI4IDMzMC44NzRoMTA4LjgwOHYxNWgtMTA4LjgwOHoiIGZpbGw9IiM4N2MwZWQiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0xODUuMzA2IDIyOS4zOCkiIGRhdGEtb3JpZ2luYWw9IiM4N2MwZWQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48Y2lyY2xlIGN4PSIzMjciIGN5PSIxODUiIGZpbGw9IiM5OTlmZWQiIHI9IjE3MCIgZGF0YS1vcmlnaW5hbD0iIzk5OWZlZCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTMyNyAzNTVjOTMuODg4IDAgMTcwLTc2LjExMiAxNzAtMTcwIDAtNDYuOTQ0LTE5LjAyOC04OS40NDQtNDkuNzkyLTEyMC4yMDhsLTI0MC40MTYgMjQwLjQxNmMzMC43NjQgMzAuNzY0IDczLjI2NCA0OS43OTIgMTIwLjIwOCA0OS43OTJ6IiBmaWxsPSIjN2M4NGU4IiBkYXRhLW9yaWdpbmFsPSIjN2M4NGU4IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyAzNzBjLTEwMi4wMDkgMC0xODUtODIuOTkxLTE4NS0xODVzODIuOTkxLTE4NSAxODUtMTg1IDE4NSA4Mi45OTEgMTg1IDE4NS04Mi45OTEgMTg1LTE4NSAxODV6bTAtMzQwYy04NS40NjcgMC0xNTUgNjkuNTMzLTE1NSAxNTVzNjkuNTMzIDE1NSAxNTUgMTU1IDE1NS02OS41MzMgMTU1LTE1NS02OS41MzMtMTU1LTE1NS0xNTV6IiBmaWxsPSIjYmVlYmZhIiBkYXRhLW9yaWdpbmFsPSIjYmVlYmZhIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTQzNi41NSA3NS40NWMyOC4wNjcgMjguMDY2IDQ1LjQ1IDY2LjgxNiA0NS40NSAxMDkuNTUgMCA4NS40NjctNjkuNTMzIDE1NS0xNTUgMTU1LTQyLjczNCAwLTgxLjQ4NC0xNy4zODMtMTA5LjU1LTQ1LjQ1bC0yMS4yMDMgMjEuMjAzYzMzLjQ5OCAzMy40OTkgNzkuNzQ4IDU0LjI0NyAxMzAuNzUzIDU0LjI0NyAxMDIuMDA5IDAgMTg1LTgyLjk5MSAxODUtMTg1IDAtNTEuMDA1LTIwLjc0OC05Ny4yNTUtNTQuMjQ3LTEzMC43NTN6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTE2MS42NzMgMzcxLjU0MS0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTY3LjYwNCA2Ny42MDQgNDIuNDI2IDQyLjQyNiA2Ny42MDQtNjcuNjA0YzUuODU4LTUuODU4IDUuODU4LTE1LjM1NiAwLTIxLjIxM3oiIGZpbGw9IiNmZjlmMjIiIGRhdGEtb3JpZ2luYWw9IiNmZjlmMjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtOTQuMDY5IDQ2MC4zNTggNjcuNjA0LTY3LjYwNGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzguMjExIDc4LjIxMXoiIGZpbGw9IiNmZjdjNDgiIGRhdGEtb3JpZ2luYWw9IiNmZjdjNDgiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48Zz48Zz48Zz48cGF0aCBkPSJtNDA3IDI4MGgtMTYwYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1di04Ljc4OWMwLTUyLjMwMiA0MS43NjMtOTUuNyA5NC4wNjMtOTYuMjA3IDUyLjgxMS0uNTExIDk1LjkzNyA0Mi4zMDEgOTUuOTM3IDk0Ljk5NnYxMGMwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzVmNTVhZiIgZGF0YS1vcmlnaW5hbD0iIzVmNTVhZiIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTYwLjAwN3YxMTkuOTkzaDgwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTEwYzAtNTIuMzgzLTQyLjYxNy05NC45OTItOTUtOTQuOTkzeiIgZmlsbD0iIzQ1M2Q4MyIgZGF0YS1vcmlnaW5hbD0iIzQ1M2Q4MyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTg1Yy0zMS43MDUgMC01Ny41LTI1Ljc5NS01Ny41LTU3LjVzMjUuNzk1LTU3LjUgNTcuNS01Ny41IDU3LjUgMjUuNzk1IDU3LjUgNTcuNS0yNS43OTQgNTcuNS01Ny41IDU3LjV6IiBmaWxsPSIjZmZlNGMyIiBkYXRhLW9yaWdpbmFsPSIjZmZlNGMyIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyA3MHYxMTVjMzEuNzA2IDAgNTcuNS0yNS43OTQgNTcuNS01Ny41cy0yNS43OTQtNTcuNS01Ny41LTU3LjV6IiBmaWxsPSIjZjJkMWE1IiBkYXRhLW9yaWdpbmFsPSIjZjJkMWE1IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
        alt=""
        width="75"
      />
      <div className="text-3xl font-semibold my-5 float-left">Sign Up</div>
      <form
        action=""
        className="bg-white w-1/3 h-auto rounded-3xl shadow-2xl p-12"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="">Full Name</label>
          <input
            className="rounded-full outline-none px-4 py-3 bg-gray-300 mt-2 focus:outline-none focus:ring focus:border-blue-300"
            type="text"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="">Email</label>
          <input
            className="rounded-full outline-none px-4 py-3 bg-gray-300 mt-2 focus:outline-none focus:ring focus:border-blue-300"
            type="email"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="">Password</label>
          <input
            className="rounded-full outline-none px-4 py-3 bg-gray-300 mt-2 focus:outline-none focus:ring focus:border-blue-300"
            type="password"
          />
        </div>

        <button className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;