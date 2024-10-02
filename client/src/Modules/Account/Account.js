import React, { useReducer } from "react";
import * as Account_Hook from "./Account_Hook";
import * as Account_BusinessLogic from "./Account_BusinessLogic";

const Account = () => {
  // Initialize useReducer with accountReducer and initialState
  const [state, dispatch] = useReducer(
    Account_Hook.accountReducer,
    Account_Hook.initialState
  );

  // Create objContext containing state, dispatch, and business logic
  const objContext = {
    state, // Contains all the state information
    dispatch, // Dispatch function to update states
    Account_BusinessLogic: new Account_BusinessLogic.Account_BusinessLogic(), // Initialize Account_BusinessLogic
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Account Details</h1>

      {/* Profile Picture */}
      <div className="mb-6">
        <img
          src={state.profilePicture || "https://via.placeholder.com/150"}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            objContext.Account_BusinessLogic.handleProfilePicChange(
              objContext,
              e
            )
          }
          className="mt-2"
        />
      </div>

      {/* Account Details Form */}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        onSubmit={(e) =>
          objContext.Account_BusinessLogic.handleSubmit(objContext, e)
        }
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={state.username}
            onChange={(e) =>
              objContext.Account_BusinessLogic.handleInputChange(
                objContext,
                "username",
                e.target.value
              )
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={(e) =>
              objContext.Account_BusinessLogic.handleInputChange(
                objContext,
                "email",
                e.target.value
              )
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            value={state.phone}
            onChange={(e) =>
              objContext.Account_BusinessLogic.handleInputChange(
                objContext,
                "phone",
                e.target.value
              )
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
