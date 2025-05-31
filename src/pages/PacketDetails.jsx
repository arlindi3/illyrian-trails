import { FaStar } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useParams } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

import {
  Description,
  Features,
  PriceDetails,
  Reviews,
  Amenities,
  AddReview,
  Trending,
} from "../components/packet-details";

import { packagesData } from "../data/dummyData";

const PacketDetails = () => {
  const { id } = useParams();
  const packet = packagesData.find((item) => item.id === id);

  if (!packet) {
    return <div className="text-center mt-10 text-xl">Paketa nuk u gjet.</div>;
  }

  return (
    <div className="pt-16 px-[3%] md:px-[6%] space-y-20">
      {/* Një paketë e vetme */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold capitalize">
            {packet.title}
          </h1>
          <div className="mt-2 flex items-center gap-3 text-sm text-gray-700">
            <BiMap />
            <span>{packet.location}</span>
            <FaStar className="text-secondaryYellow" />
            <span>{packet.rating}</span>
          </div>
          <div className="flex gap-2 mt-2">
            {packet.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 basis-[30rem] overflow-hidden">
            <img
              src={packet.images[0]}
              alt="main"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1 basis-[16rem] space-y-3">
            {packet.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`img-${i}`}
                className="w-full h-[150px] object-cover rounded-xl"
              />
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div>
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Features</Tab>
              <Tab>Price</Tab>
              <Tab>Reviews</Tab>
            </TabList>
            <TabPanel>
              <Description description={packet.description} />
            </TabPanel>
            <TabPanel>
              <Features />
            </TabPanel>
            <TabPanel>
              <PriceDetails />
            </TabPanel>
            <TabPanel>
              <Reviews />
            </TabPanel>
          </Tabs>
        </div>

        <Amenities />
        <AddReview />
      </div>

      <Trending />
    </div>
  );
};

export default PacketDetails;
