import { useState } from "react";
import {
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    format,
    startOfWeek,
} from "date-fns";
import styles from "./tradingOverview.module.scss";

import arrowOut from "../../../images/svg/ArrowOut.svg";
import tradeUp from "../../../images/svg/tradeUp.svg";
import infoGray from "../../../images/svg/infoGray.svg";

import carpetLeft from "../../../images/svg/Carpet_left.svg";
import carpetRight from "../../../images/svg/Carpet_right.svg";

import dots from "../../../images/svg/dots.svg";
import Button from "../../universalComponents/button/button";

import stockIcon from "../../../images/stock/blank.svg"

import Plus from "../../../images/svg/button_plus.svg"

const TradingOverview = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [activeDate, setActiveDate] = useState<Date>(new Date()); 
    const monthStart = startOfMonth(currentDate);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const monthEnd = endOfMonth(monthStart);

    const days = Array.from({ length: 42 }, (_, i) => {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        return date;
    });

    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const watchlistItems = [
        { id: 1, symbol: "PLTR", signal: "check signal" },
        { id: 2, symbol: "PLTR", signal: "check signal" },
        { id: 3, symbol: "PLTR", signal: "check signal" },
    ];

    return (
        <div className={styles.tradingOverview}>
            <div className={styles.left}>
                <div className={styles.header}>
                    <div className={styles.cardHeading}>Trading Overview</div>
                    <div className={styles.cardDiscription}>
                        Track your trades, strategies, and key market <br />
                        signals for the day
                    </div>
                </div>
                <div className={styles.watchlist}>
                    <div className={styles.watchlistHeader}>
                        <div className={styles.HeadingTxt}>
                            <img src={tradeUp} alt="" /> Watchlist
                        </div>
                        <button className={styles.infoBtn}>
                            <img src={infoGray} alt="" />
                        </button>
                    </div>

                    <div className={styles.watchlistItems}>
                        {watchlistItems.map((item) => (
                            <div key={item.id} className={styles.watchlistItem}>
                                <div className={styles.stockIcon}><img src={stockIcon} alt=""/></div>
                                <div className={styles.stockInfo}>
                                    <div className={styles.strong}>
                                        {item.symbol}
                                    </div>
                                    <div className={styles.span}>
                                        {item.signal}
                                    </div>
                                </div>
                                <button className={styles.moreBtn}>
                                    <img src={dots} alt="" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    type="Neutral"
                    style="Secondary"
                    size="medium"
                    onClick={() => console.log("Go!")}
                >
                    Add Stocks
                    <img src={Plus} alt="" />
                </Button>
            </div>
            <div className={styles.right}>
                <button className={styles.exportBtn}>
                    <img src={arrowOut} alt="" />
                </button>
                <div className={styles.content}>
                    <div className={styles.calendar}>
                        <div className={styles.nav}>
                            <button onClick={prevMonth}>
                                <img src={carpetLeft} alt="" />
                            </button>
                            <div className={styles.actualDate}>{format(currentDate, "MMM d")}</div>
                            <button onClick={nextMonth}>
                                <img src={carpetRight} alt="" />
                            </button>
                        </div>

                        <div className={styles.daysHeader}>
                            {[
                                "Sun",
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                            ].map((day) => (
                                <div key={day} className={styles.dayLabel}>
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className={styles.daysGrid}>
                            {days.map((day, index) => {
                                const isCurrentMonth =
                                    day >= monthStart && day <= monthEnd;
                                const isToday =
                                    format(day, "yyyy-MM-dd") ===
                                    format(new Date(), "yyyy-MM-dd");
                                const isActive = 
                                    format(day, "yyyy-MM-dd") === format(activeDate, "yyyy-MM-dd");
                                const dayNumber = format(day, "d");

                                return (
                                    <div
                                        key={index}
                                        className={`${styles.day} ${
                                            !isCurrentMonth
                                                ? styles.outside
                                                : ""
                                        } ${isToday ? styles.today : ""} ${isActive ? styles.isActive : ""}`}
                                        onClick={() => isCurrentMonth && setActiveDate(day)}
                                    >
                                        {dayNumber}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingOverview;
