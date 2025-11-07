"use client";

import { useState } from "react";
import { TransactionList } from "@/components/transaction-list";
import { payments } from "../api/payments";
import { ErrorMessage } from "@/components/error-message";
import { DatePicker } from "@/components/date-picker";
import dayjs from "dayjs";

export default function Home() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const error = "Failed to load the transactions.";

  const transactions = payments.filter((payment) => {
    if (!startDate && !endDate) {
      return true;
    }

    const paymentDate = new Date(payment.date);

    const startDay = startDate?.getDate();
    const startMonth = startDate?.getMonth();
    const startYear = startDate?.getFullYear();
    const endDay = endDate?.getDate();
    const endMonth = endDate?.getMonth();
    const endYear = endDate?.getFullYear();
    const paymentDay = paymentDate?.getDate();
    const paymentMonth = paymentDate?.getMonth();
    const paymentYear = paymentDate?.getFullYear();

    const paymentDateString = `${paymentYear}-${paymentMonth}-${paymentDay}`;
    const startDateString = `${startYear}-${startMonth}-${startDay}`;
    const endDateString = `${endYear}-${endMonth}-${endDay}`;

    return (
      (dayjs(startDateString).isBefore(paymentDateString) ||
        dayjs(startDateString).isSame(paymentDateString)) &&
      (dayjs(endDateString).isAfter(paymentDateString) ||
        dayjs(startDateString).isSame(paymentDateString))
    );
  });

  return (
    <div className="flex flex-col gap-10">
      <ErrorMessage message={error} />
      <div>
        <p>Range filter</p>
        <div>
          <label>Start date</label>
          <DatePicker
            onChange={(value) => setStartDate(value)}
            stateDate={startDate}
          />
        </div>
        <div>
          <label>End date</label>
          <DatePicker
            onChange={(value) => setEndDate(value)}
            stateDate={endDate}
          />
        </div>
      </div>
      <TransactionList transactions={transactions} />
    </div>
  );
}
