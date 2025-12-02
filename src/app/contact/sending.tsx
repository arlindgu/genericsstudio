import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";

export function LoadingSpinner() {
  return (
    <>
      <Empty className="w-full">
        <EmptyHeader>
          <EmptyMedia className="rounded-none bg-foreground" variant="icon">
            <Spinner className="text-background" />
          </EmptyMedia>
          <EmptyTitle>Bearbeitung Ihrer Anfrage</EmptyTitle>
          <EmptyDescription>
            Bitte warten Sie, während wir Ihre Anfrage bearbeiten. Aktualisieren
            Sie die Seite nicht.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent></EmptyContent>
      </Empty>
    </>
  );
}
