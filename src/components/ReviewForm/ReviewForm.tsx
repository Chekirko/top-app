import React from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import Rating from "../Rating/Rating";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewForm.interface";

export default function ReviewForm({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmit = handleSubmit((data: IReviewForm) => console.log(data));
  return (
    <form onSubmit={onSubmit}>
      <div className={cn(className, styles.reviewForm)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          error={errors.name}
          placeholder="Имя"
          type="text"
          className={styles.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          error={errors.title}
          type="text"
          placeholder="Заголовок отзыва"
          className={styles.title}
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
        />
        <div className={styles.submit}>
          <Button appearance={"primary"}>Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.succes}>
        <div className={styles.succesTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
}
