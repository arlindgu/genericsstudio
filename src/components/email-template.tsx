import * as React from "react";

interface EmailTemplateProps {
    Name: string;
    Email: string;
    Website?: string;
    ProjectName?: string;
    Details: string;
    Code: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    Name, Email, Website, ProjectName, Details, Code
}) => (
    <div>
        <h1>NEW INQUIRY {Code}</h1>
        <p><strong>Name:</strong> {Name}</p>
        <p><strong>Email:</strong> {Email}</p>
        {Website && <p><strong>Website:</strong> {Website}</p>}
        {ProjectName && <p><strong>Project Name:</strong> {ProjectName}</p>}
        <p><strong>Details:</strong> {Details}</p>
    </div>
);

export default EmailTemplate;