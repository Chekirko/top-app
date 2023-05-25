import React, { ErrorInfo, useState } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Rating from "../Rating/Rating";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentInterface } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../../helpers/api";

export default function ReviewForm({
  isOpened,
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReviewForm>();
  const [isSucces, setIsSucces] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentInterface>(
        API.review.createDemo,
        {
          ...formData,
          productId,
        }
      );
      if (data.message) {
        setIsSucces(true);
        setError(undefined);
        reset();
      } else {
        setError("Что-то пошло не так");
      }
    } catch (e: any) {
      setError(e.message);
      setIsSucces(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(className, styles.reviewForm)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          error={errors.name}
          placeholder="Имя"
          type="text"
          className={styles.name}
          tabIndex={isOpened ? 0 : -1}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          error={errors.title}
          type="text"
          placeholder="Заголовок отзыва"
          className={styles.title}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: { value: true, message: "Укажите оценку" },
            }}
            render={({ field }) => (
              <Rating
                isEditable
                error={errors.rating}
                ref={field.ref}
                rating={field.value}
                setRating={field.onChange}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Введите текст отзыва" },
          })}
          placeholder="Текст отзыва"
          error={errors.description}
          className={styles.description}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button appearance={"primary"} tabIndex={isOpened ? 0 : -1}>
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSucces && (
        <div className={cn(styles.panel, styles.succes)}>
          <div className={styles.succesTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSucces(false)}
          />
        </div>
      )}
      {error && (
        <div className={cn(styles.panel, styles.error)}>
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon
            className={styles.close}
            onClick={() => setError(undefined)}
          />
        </div>
      )}
    </form>
  );
}
