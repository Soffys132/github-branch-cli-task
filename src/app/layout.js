import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import './globals.css';

export const metadata = {
    title: 'My Website',
    description: 'Your website description',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="layout">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}