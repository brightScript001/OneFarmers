import { TextField, Select, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import TextArea from "../../ui/TextArea";

function ProductDetails({ control, formState: { errors } }) {
  const errorMessage = "This field is required";

  const renderTextField = (name, label, type = "text") => (
    <Controller
      name={name}
      control={control}
      rules={{ required: errorMessage }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          variant="outlined"
          fullWidth
          error={!!errors?.[name]}
          helperText={errors?.[name]?.message}
          sx={{ backgroundColor: "var(--color-white-100)" }}
        />
      )}
    />
  );

  const renderSelectField = (name, label, options) => (
    <Controller
      name={name}
      control={control}
      rules={{ required: errorMessage }}
      render={({ field }) => (
        <Select
          {...field}
          displayEmpty
          fullWidth
          variant="outlined"
          error={!!errors?.[name]}
          sx={{ backgroundColor: "var(--color-white-100)" }}
          renderValue={(selected) => selected || label}
        >
          <MenuItem value="" disabled>
            {label}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );

  return (
    <>
      <FormRow>{renderTextField("productName", "Name of Product")}</FormRow>
      <FormRow>
        <Controller
          name="description"
          control={control}
          rules={{ required: errorMessage }}
          render={({ field }) => (
            <TextArea placeholder="Describe your Product here" {...field} />
          )}
        />
      </FormRow>
      <FormRow>{renderTextField("costPerKg", "Cost per kg", "number")}</FormRow>
      <FormRow>
        {renderSelectField("productClass", "Select Product Class", [
          { value: "class 1", label: "Harvest Goods" },
          { value: "class 2", label: "Crop Categories" },
          { value: "class 3", label: "Farm Produce" },
          { value: "class 4", label: "Agric Items" },
          { value: "class 5", label: "Field Harvest" },
          { value: "class 6", label: "Farm Inventory" },
          { value: "class 7", label: "Produce Listing" },
          { value: "class 8", label: "Agricultural Products" },
          { value: "class 9", label: "Farm Stock" },
          { value: "class 10", label: "Crop Collection" },
        ])}
      </FormRow>
      <FormRow>
        {renderTextField("numberOfProducts", "Number of Products", "number")}
      </FormRow>
    </>
  );
}

export default ProductDetails;
