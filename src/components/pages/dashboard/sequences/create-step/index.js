import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import { CallIcon, LinkedinFilledIcon, MessageFilledIcon, PhoneFilledIcon, TaskSquareIcon, TwitterFilledIcon } from "@src/components/common/Icon";
import Input from "@src/components/common/Input";
import TextArea from "@src/components/common/Textarea";
import { useState } from "react";
import "./styles.scss";

export default function CreateSequenceStep(props) {
  const [currentStep, setCurrentStep] = useState("message");

  const CurrentStepPages = () => {
    switch (currentStep) {
      case "message":
        return <MessageStepView />;
      case "phone":
        return <PhoneStepView />;
      case "linkedin":
        return <LinkedinStepView />;
      case "twitter":
        return <TwitterStepView />;
      case "generic":
        return <GenericStepView />;
      default:
        return <MessageStepView />;
    }
  };

  const MessageStepView = () => (
    <section className="flex flex-col gap-y-5">
      <div>
        <label>Email Type</label>
        <Dropdown className="mt-3 w-full" optList={[{ label: "muhammadsatriaherman@gmail.com", value: "muhammadsatriaherman@gmail.com" }]} isNoMaxWidth />
      </div>
      <div>
        <span>Time Interval To Wait</span>
        <div className="flex  gap-x-[0.3rem] flex-wrap md:gap-x-7">
          <div className="flex items-center gap-x-3 mt-5">
            <Input placeholder="00" type="crm-input-text" className="w-[100px] mt-0" />
            <span className="text-crm-gray-170">days</span>
          </div>
          <div className="flex items-center gap-x-3 mt-5">
            <Input placeholder="00" type="crm-input-text" className="w-[100px] mt-0" />
            <span className="text-crm-gray-170">hours</span>
          </div>
          <div className="flex items-center gap-x-3 mt-5">
            <Input placeholder="00" type="crm-input-text" className="w-[100px] mt-0" />
            <span className="text-crm-gray-170">mins</span>
          </div>
        </div>
      </div>

      <div>
        <label>Schedule</label>
        <Dropdown className="mt-3 w-full" optList={[{ label: "muhammadsatriaherman@gmail.com", value: "muhammadsatriaherman@gmail.com" }]} isNoMaxWidth />
      </div>

      <div className="bg-crm-green-200 py-3 p-5 rounded-lg text-stone-900">An Email will be automatically delivered immediately, after a prospect is added to this sequence.</div>

      <div className="flex gap-5 justify-end mt-5">
        <button>Cancel</button>
        <Button variant="primary" onClick={() => setCurrentStep("phone")}>
          Next
        </Button>
      </div>
    </section>
  );
  const PhoneStepView = () => (
    <section className="flex flex-col gap-y-5">
      <div>
        <label>Instructions (Optional)</label>
        <TextArea className="mt-4 block w-full" isNoMaxWidth />
      </div>
      <div>
        <div className="flex  gap-x-[0.3rem] flex-wrap md:gap-x-7">
          <div className="flex items-center gap-x-3 mt-5">
            <span>Run this step on day</span>
            <Input placeholder="00" type="crm-input-text" className="w-[100px] mt-0" />
          </div>
        </div>
      </div>

      <div>
        <label>Priority</label>
        <Dropdown
          className="mt-3 w-full"
          optList={[
            { label: "Normal", value: "Normal" },
            { label: "High", value: "High" },
            { label: "Low", value: "Low" },
          ]}
          isNoMaxWidth
        />
      </div>

      <div className="bg-crm-green-200 py-3 p-5 rounded-lg text-stone-900">An Email will be automatically delivered immediately, after a prospect is added to this sequence.</div>

      <div className="flex gap-5 justify-end mt-5">
        <button>Cancel</button>
        <Button variant="primary" onClick={() => setCurrentStep("linkedin")}>
          Next
        </Button>
      </div>
    </section>
  );

  const LinkedinStepView = () => (
    <section className="flex flex-col gap-y-5">
      <div>
        <label>Touch Type</label>
        <Dropdown className="mt-3 w-full" optList={[{ label: "View Profile", value: "View Profile" }]} isNoMaxWidth />
      </div>
      <div>
        <label>Notes / Pointers (Optional)</label>
        <TextArea className="mt-4 block w-full" isNoMaxWidth />
      </div>
      <div>
        <div className="flex  gap-x-[0.3rem] flex-wrap md:gap-x-7">
          <div className="flex items-center gap-x-3 mt-5">
            <span>Run this step on day</span>
            <Input placeholder="00" type="crm-input-text" className="w-[100px] mt-0" />
          </div>
        </div>
      </div>

      <div>
        <label>Priority</label>
        <Dropdown
          className="mt-3 w-full"
          optList={[
            { label: "Normal", value: "Normal" },
            { label: "High", value: "High" },
            { label: "Low", value: "Low" },
          ]}
          isNoMaxWidth
        />
      </div>

      <div className="bg-crm-green-200 py-3 p-5 rounded-lg text-stone-900">An Email will be automatically delivered immediately, after a prospect is added to this sequence.</div>

      <div className="flex gap-5 justify-end mt-5">
        <button>Cancel</button>
        <Button variant="primary" onClick={() => setCurrentStep("twitter")}>
          Next
        </Button>
      </div>
    </section>
  );
  const TwitterStepView = () => (
    <section className="flex flex-col gap-y-5">
      <div>
        <label>Touch Type</label>
        <Dropdown className="mt-3 w-full" optList={[{ label: "View Profile", value: "View Profile" }]} isNoMaxWidth />
      </div>
      <div>
        <label>Notes / Pointers (Optional)</label>
        <TextArea className="mt-4 block w-full" isNoMaxWidth />
      </div>
      <div>
        <div className="flex  gap-x-[0.3rem] flex-wrap md:gap-x-7">
          <div className="flex items-center gap-x-3 mt-5">
            <span>Run this step on day</span>
            <Input placeholder="00" type="crm-input-text" className="w-[100px] mt-0" />
          </div>
        </div>
      </div>

      <div>
        <label>Priority</label>
        <Dropdown
          className="mt-3 w-full"
          optList={[
            { label: "Normal", value: "Normal" },
            { label: "High", value: "High" },
            { label: "Low", value: "Low" },
          ]}
          isNoMaxWidth
        />
      </div>

      <div className="bg-crm-green-200 py-3 p-5 rounded-lg text-stone-900">An Email will be automatically delivered immediately, after a prospect is added to this sequence.</div>

      <div className="flex gap-5 justify-end mt-5">
        <button>Cancel</button>
        <Button variant="primary" onClick={() => setCurrentStep("generic")}>
          Next
        </Button>
      </div>
    </section>
  );

  const GenericStepView = () => (
    <section className="flex flex-col gap-y-5">
      <div>
        <label>Instructions (Optional)</label>
        <TextArea className="mt-4 block w-full" isNoMaxWidth />
      </div>
      <div>
        <div className="flex  gap-x-[0.3rem] flex-wrap md:gap-x-7">
          <div className="flex items-center gap-x-3 mt-5">
            <span>Run this step on day</span>
            <Input placeholder="00" type="crm-input-text" className="w-[100px] mt-0" />
          </div>
        </div>
      </div>

      <div>
        <label>Priority</label>
        <Dropdown
          className="mt-3 w-full"
          optList={[
            { label: "Normal", value: "Normal" },
            { label: "High", value: "High" },
            { label: "Low", value: "Low" },
          ]}
          isNoMaxWidth
        />
      </div>

      <div className="bg-crm-green-200 py-3 p-5 rounded-lg text-stone-900">An Email will be automatically delivered immediately, after a prospect is added to this sequence.</div>

      <div className="flex gap-5 justify-end mt-5">
        <button>Cancel</button>
        <Button variant="primary" onClick={() => props.closeModal()}>
          Next
        </Button>
      </div>
    </section>
  );

  return (
    <div className="text-white create-sequences-step">
      <section className="my-5 flex gap-x-7">
        <button onClick={() => setCurrentStep("message")} className={`${currentStep === "message" ? "sequences-step-active-button" : ""}`}>
          <MessageFilledIcon fill="#fff" />
        </button>
        <button onClick={() => setCurrentStep("phone")} className={`${currentStep === "phone" ? "sequences-step-active-button" : ""}`}>
          <PhoneFilledIcon fill="#fff" />
        </button>
        <button onClick={() => setCurrentStep("linkedin")} className={`${currentStep === "linkedin" ? "sequences-step-active-button" : ""}`}>
          <LinkedinFilledIcon />
        </button>
        <button onClick={() => setCurrentStep("twitter")} className={`${currentStep === "twitter" ? "sequences-step-active-button" : ""}`}>
          <TwitterFilledIcon />
        </button>
        <button onClick={() => setCurrentStep("generic")} className={`${currentStep === "generic" ? "sequences-step-active-button" : ""}`}>
          <TaskSquareIcon />
        </button>
      </section>

      <CurrentStepPages />
    </div>
  );
}
