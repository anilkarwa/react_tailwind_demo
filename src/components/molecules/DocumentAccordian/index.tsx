import { ComponentProps, forwardRef, useState} from "react";
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

interface Props
  extends Omit<ComponentProps<"div">, "className"> {
  documents: any[]
}

export const DocumentAccordian = forwardRef<HTMLDivElement, Props>(
  ({documents, ...rest }, ref) => {

    const [active, setActive] = useState<number>(0);

    const toggleExpand = (tab: number) => {
      if (active === tab) {
        setActive(-1);
      } else {
        setActive(tab);
      }
      
    }

    return (
      <div 
        {...rest}
        ref={ref}
      >
        {documents.map((doclist, index) => (
          <>
            <div 
              className="bg-gray-50 flex justify-between items-center p-6 first:rounded-t-lg last:rounded-b-lg border-b-2 cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <span className={`font-medium text-lg ${active === index ? '' : 'text-gray-600'}`}>{doclist.displayName}</span>
              <ChevronDownIcon className="h-4 w-4 font-medium" />
            </div>
            {active === index && (
              <>
                {doclist.documents.map((doc: any) =>  (
                  <div key={doc.id} className="bg-white flex justify-between items-center py-4 px-4">
                    <span className="text-md font-medium">{doc.displayName}</span>
                    <div className="border-2 rounded-md border-slate-200 p-1 cursor-pointer">
                      <ArrowRightIcon className="h-4 w-4 font-medium" />
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        ))}
      </div>
    );
  }
);