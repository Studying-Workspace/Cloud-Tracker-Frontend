import { useState } from "react";
import { grey } from "@mui/material/colors";
import { MenuItem, Select } from "@mui/material";

const ProfileSelectMenu = () => {
  return (
    <div className="w-fit bg-gradient-to-br from-linearBlue-2 to-linearOrange-100 pb-[1px]">
      <div className="flex h-[35px] w-[250px] justify-between bg-white">
        <Select
          labelId="label"
          id="select"
          value=""
          displayEmpty
          className="w-full"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-icon": {
              fontSize: "2rem",
            },
            "& .MuiSelect-select": {
              color: grey[600],
              fontSize: "1rem",
              fontFamily: '"Poppins", sans-serif',
            },
            "& .MuiMenuItem-root": {
              color: "black",
              fontSize: "1rem",
              fontFamily: '"Poppins", sans-serif',
            },
          }}
          renderValue={(value) =>
            value === "" ? (
              <span
                style={{
                  color: grey[500],
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: "1.1rem",
                }}
              >
                Country
              </span>
            ) : (
              value
            )
          }
        >
          <MenuItem value="US">United States</MenuItem>
          <MenuItem value="CA">Canada</MenuItem>
          <MenuItem value="MX">Mexico</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default ProfileSelectMenu;
