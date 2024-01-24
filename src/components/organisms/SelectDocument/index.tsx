import { ComponentProps, forwardRef} from "react";
import { Label } from "../../atoms/Label";
import { SearchDropdown } from "../../molecules/SearchDropdown";
import { jobTemaplates, locations, subsidiary, seniority, documents } from '../../../assets/data/data'
import { DocumentAccordian } from "../../molecules/DocumentAccordian";
import { ArrowLeftIcon, } from '@heroicons/react/24/solid'
import { SearchInput } from "../../atoms/SearchInput";
import { ToggleButton } from "../../atoms/ToggleButton";

interface Props
  extends Omit<ComponentProps<"div">, "className"> {
  
}

export const SelectDocument = forwardRef<HTMLDivElement, Props>(
  ({ ...rest }, ref) => {
    return (
      <div 
        {...rest}
        ref={ref}
      >
        <div className="w-full px-6 py-8 border-container text-left">
          <p className="font-semibold text-xl pb-6 antialiased">Which agreements, forms and notices should be sent to Jason Smith?</p>
          <p className="font-medium antialiased">Employees assigned to this job type will be required to review, where relevant fill-in, and sign the following agreements and notices:</p>
        </div>
        <p className="font-medium text-md pt-8 pb-2">Select the agreements, notices and documents you want Jason Smith to sign</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-container">
            <p className="font-medium text-lg mb-3">Available Documents</p>
            <SearchInput />
            <Label text="Filter by:" fontSize="font-medium" />
            <div className="flex flex-row mt-2">
              <SearchDropdown text="Job Templates" items={jobTemaplates} displayKey="displayName" />
              <div className="w-4" />
              <SearchDropdown text="Locations" items={locations} displayKey="city" />
            </div>
            <div className="flex flex-row mt-2">
              <SearchDropdown text="Subsidiary" items={subsidiary} displayKey="city" />
              <div className="w-4" />
              <SearchDropdown text="Seniority" items={seniority} displayKey="name" />
            </div>
            <div className="flex flex-row mt-6 justify-between items-center">
              <p className="text-md font-medium">53 Available Documents</p>
              <ToggleButton text="Select All" checked={false} />
            </div>
            <div className="mt-6">
              <div className="border-2 rounded-lg border-orange-500 w-full">
                <DocumentAccordian documents={documents} />
              </div>
            </div>
          </div>
          <div className="border-container">
            <p className="text-lg font-medium mb-3">Selected Documents</p>
            <SearchInput />
            <div className="border-2 rounded-lg bg-gray-100 h-screen mt-4">
              <div className="p-12 flex flex-col items-center">
                <ArrowLeftIcon className="h-14 w-14 font-bold text-gray-400" />
                <p className="font-semibold text-gray-500 text-sm text-center mt-10">Select documents from the left panel to have employees review them and provide a signature acknowledging review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);