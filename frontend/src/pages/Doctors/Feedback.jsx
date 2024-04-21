import React from "react";
import { avatar } from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../components/utils/formatedate";

const Feedback = () => {
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews (272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure>
              <img src={avatar} alt="" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                ABC
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formateDate("15 - 06 - 2016")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px]">
                Good services, highly recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;