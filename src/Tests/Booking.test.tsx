import * as React from "react";
import {submitForm} from "../Pages/Booking/Booking";
import { useNavigate } from "react-router-dom";


describe('Form component', () => {
    it('handles submit correctly', () => {
      const date = new Date();
      const time = '12:00 PM';
      const guest = 4;
      const occasion = 'birthday';
      const onSubmit = jest.fn();
      const event = { preventDefault: jest.fn() };
    
    submitForm({ date, time,guest, occasion });
    
      expect(event.preventDefault).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledWith({ date, time,guest,occasion});
    });
  });